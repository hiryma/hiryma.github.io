(function main(){
   "use strict";
   var context = {
      reader: new FileReader(),
      envMap: {width:0, height:0, texels:null },
      envMapJustLoaded: false,
      canvas: null,
      canvasContext: null,
      canvasImageData: null,
      newWorkerCount: 0,
      waitingWorkerCount: 0,
      workers: [],
      prevFrameTime: 0,
      pause: false,
   };
   context.newWorkerCount = parseInt(document.getElementById('workerCount').value);
   
   var add = function(v0, v1){
      return [
         v0[0] + v1[0], 
         v0[1] + v1[1], 
         v0[2] + v1[2]];
   }; 
   var setupEnvMap = function(arrayBuffer){
      if (arrayBuffer){
         var header = new Uint32Array(arrayBuffer, 0, 128);
         //簡易的なDDSローダ。DDSのRGBA32F以外読めない。
         context.envMap.texels = new Float32Array(arrayBuffer, 128);
         context.envMap.height = header[3];
         context.envMap.width = header[4];
      }else{
         context.envMap = {width:0, height:0, texels:null};
      }
      context.envMapJustLoaded = true;
   };
   context.reader.onload = function(file){
      setupEnvMap(context.reader.result);
   };
   var onJsonize = function(e){
      var json = JSON.stringify(context.scene, null, 3);
      var blob = new Blob([json], {type:'text/plain'});
      var url = URL.createObjectURL(blob);
      e.target.href = url;
   };
   var onSubmit = function(e){
      if (e.keyCode && (e.keyCode === 13)){
         e.preventDefault();
         var v = parseInt(document.getElementById('workerCount').value);
         if (v < 1){
            v = 1;
         }
         context.newWorkerCount = v;
         v = parseFloat(document.getElementById('fovY').value);
         if (v < 1){ //最低1度
            v = 1;
         }
         context.scene.fovY = v;
      }
      var pause = document.getElementById('pause').checked;
      context.pause = pause;
   }; 
   var onFovYChange = function(e){
      e.preventDefault();
      var v = parseFloat(document.getElementById('fovY').value);
      if (v < 1){ //最低1度
         v = 1;
      }
      context.scene.fovY = v;
      document.getElementById('fovYOutput').innerHTML = v + '度';
   }; 
   var onProgress = function(e){
      if (e.lengthComputable){
         document.getElementById('progress').innerHTML = '転送中:' + e.loaded + ' / ' + e.total;
      }
   };
   context.reader.onprogress = onProgress;
   var onFileSelect = function(e){
      var file = e.target.files[0];
      context.reader.readAsArrayBuffer(file);
   };
   var onDragOver = function(e){
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
   };
   var onDrop = function(e){
      e.stopPropagation();
      e.preventDefault();
      if (e.dataTransfer.files.length > 0){
         var file = e.dataTransfer.files[0];
         context.reader.readAsArrayBuffer(file);
      }else{
         var url = e.dataTransfer.getData('text/plain');
         if (url.length > 0){
            var xhr = new XMLHttpRequest(); 
            xhr.open('GET', url);
            xhr.responseType = 'arraybuffer';
            xhr.addEventListener('load', function(e){
               setupEnvMap(xhr.response);
            });
            xhr.addEventListener('progress', onProgress);
            xhr.send();
         }
      }
   };
   //関数定義
   var setupScene = function(){
      var scene = {};
      var OBJECT_COUNT = 10;
      var i;
      var o;
      scene.objects = [];
      //地面
      scene.objects[0] = {};
      o = scene.objects[0];
      o.position = [0, -400, 0];
      o.radius = 300;
      o.emission = [0.5, 0.5, 0.5];
      o.velocity = [0, 0, 0];
      //その他
      for (i = 1; i < OBJECT_COUNT; i += 1){
         scene.objects[i] = {};
         o = scene.objects[i];
         o.position = [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10];
         o.radius = (Math.random() + 0.25) * 20;
         o.emission = [
            Math.random(),
            Math.random(),
            Math.random()];
         o.velocity = [
            (Math.random() - 0.5) * 5, 
            (Math.random() - 0.5) * 5, 
            (Math.random() - 0.5) * 5];
      }
      scene.fovY = 120;
      return scene;
   };
   var clearImage = function(canvas, r, g, b, alpha){
      var context2d = canvas.getContext('2d');
      var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
      var pixels = imageData.data;
      var n = imageData.width * imageData.height * 4;
      var i;
      for (i = 0; i < n; i += 4){
         pixels[i + 0] = r;
         pixels[i + 1] = g;
         pixels[i + 2] = b;
         pixels[i + 3] = alpha;
      }
      context2d.putImageData(imageData, 0, 0);
   };
   var fillImageRandom = function(canvas){
      var context2d = canvas.getContext('2d');
      var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
      var pixels = imageData.data;
      var n = imageData.width * imageData.height * 4;
      var i;
      for (i = 0; i < n; i += 4){
         pixels[i + 0] = Math.floor(Math.random() * 256);
         pixels[i + 1] = Math.floor(Math.random() * 256);
         pixels[i + 2] = Math.floor(Math.random() * 256);
         pixels[i + 3] = Math.floor(Math.random() * 256);
      }
      context2d.putImageData(imageData, 0, 0);
   };
   var updateScene = function(scene){
      var count = scene.objects.length;
      var o;
      var i;
      var j;
      for (i = 1; i < count; i += 1){
         o = scene.objects[i];
         o.position = add(o.position, o.velocity);
         for (j = 0; j < 3; j += 1){
            if (o.position[j] > 100){ 
               o.position[j] = 100;
               o.velocity[j] *= -1;
            }else if (o.position[j] < -100){
               o.position[j] = -100;
               o.velocity[j] *= -1;
            }
         }
      }
   };
   var copyLines3To4 = function(dst, dstY, src, w, h){
      var y;
      var x;
      var di = (dstY * w) * 4;
      var si = 0;
      var c;
      for (y = 0; y < h; y += 1){
         for (x = 0; x < w; x += 1){
            for (c = 0; c < 3; ++c){
               dst[di + c] = src[si + c];
            }
            dst[di + 3] = 255;
            di += 4;
            si += 3;
         }
      }
   };
   var render = function(context){
      var i;
      var workerUrl = document.getElementById('workerUrl').href;
      //ワーカーを準備する
      if (context.workers.length !== context.newWorkerCount){
         for (i = 0; i < context.workers.length; i += 1){ //強制終了。いいのか？
           context.workers[i].terminate();
         }
         context.workers = [];
         for (i = 0; i < context.newWorkerCount; i += 1){
            context.workers[i] = new Worker(workerUrl);
         }
         context.envMapJustLoaded = true; //workerのデータが死ぬので再ロードのためにフラグを立てる
      }
      context.waitingWorkerCount = context.workers.length; //待ち開始
      //まずスクリーンを縦に分割する。
      var dstPixels = context.canvasImageData.data; //Uint8Array
      var w = context.canvas.width;
      var h = context.canvas.height;
      var div = context.workers.length;
      var hUnit = Math.floor(h / div);
      if ((hUnit * div) <  h){
         hUnit += 1;
      }
      var arg = {screenWidth:w, screenHeight:h};
      arg.scene = context.scene;
      if (context.envMapJustLoaded){
         arg.envMap = context.envMap;
         context.envMapJustLoaded = false;
      }
      var y = 0;
      var fb;
      for (i = 0; i < context.workers.length; i += 1){
         fb = {};
         fb.width = w;
         if ((h - y) >= hUnit){
            fb.height = hUnit;
         }else{
            fb.height = h - y;
         }
         fb.pixels = new Uint8Array(fb.height * w * 3);
         arg.frameBuffer = fb;
         arg.yBegin = y;
         
         context.workers[i].onmessage = function(e){
            copyLines3To4(
               dstPixels, 
               e.data.yBegin, 
               e.data.pixels, 
               w,  
               e.data.height);
            context.waitingWorkerCount -= 1;
            if (context.waitingWorkerCount === 0){ //最後のが来た
               context.canvasContext.putImageData(context.canvasImageData, 0, 0); //描画
            }
         };
         context.workers[i].postMessage(arg, [arg.frameBuffer.pixels.buffer]);
         y += fb.height;
      }
   };
   var update = function update(){
      if ((context.waitingWorkerCount === 0) && (context.pause === false)){ //待ち中であればスキップ
         var now = (new Date()).valueOf();
         var interval = now - context.prevFrameTime;
         context.prevFrameTime = now;
         document.getElementById('frameTime').innerHTML = 'フレーム計算時間(ミリ秒): ' + interval;
         updateScene(context.scene);
         render(context);
      }
      window.requestAnimationFrame(update);
//        window.setTimeout(update, 0);
   }; 
   document.getElementById('pause').addEventListener('change', onSubmit, false);
   document.getElementById('workerCount').addEventListener('keydown', onSubmit, false);
   document.getElementById('fovY').addEventListener('input', onFovYChange, false);
   document.getElementById('file').addEventListener('change', onFileSelect, false);
   document.getElementById('screen').addEventListener('dragover', onDragOver, false);
   document.getElementById('screen').addEventListener('drop', onDrop, false);
   document.getElementById('jsonLink').addEventListener('click', onJsonize, false);
   context.canvas = document.getElementById('screen');
   context.canvasContext = context.canvas.getContext('2d');
   context.canvasImageData = context.canvasContext.getImageData(
      0, 
      0, 
      context.canvas.width, 
      context.canvas.height);
   clearImage(context.canvas, 0, 0, 0, 255);
   context.scene = setupScene();
   window.requestAnimationFrame(update);
//   window.setTimeout(update, 0);
}());
