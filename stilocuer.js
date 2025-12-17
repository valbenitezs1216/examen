const canvita = document.createElement("canvas")
   canvita.width = 500;
   canvita.height = 500;

  document.body.appendChild(canvita);
  const ctx = canvita.getContext("2d");
  //Casa
   ctx.lineWidth = 3;
   ctx.strokeRect (120, 100, 250, 200);
   //Puerta
   ctx.fillStyle = '#682e11';
   ctx.fillRect (195, 200, 50, 100);
   //techo
   ctx.beginPath();
   ctx.moveTo(245, 30);
   ctx.lineTo(370, 100);
   ctx.lineTo(120, 100);
   ctx.closePath ();
   ctx.stroke();
   //Ventana
   ctx.fillStyle = '#87a6ff';
ctx.fillRect (145, 130, 60, 60);
   ctx.beginPath();
        ctx.moveTo(145 + 30, 130); 
        ctx.lineTo(145 + 30, 130 + 60);
        ctx.moveTo(145, 130 + 30); 
        ctx.lineTo(145 + 60, 130 + 30);
        ctx.stroke();
    //Chimenea
      ctx.fillStyle = '#950a0b';
     ctx.fillRect(300, 40, 40, 60);    
