const scene=document.querySelector(".scene");

/* 🌬 WIND CONTROL (CHANGE VALUE) */
const WIND_POWER = 0.6;   // ⬅ increase for stronger wind

function createKite(x,y){
  const kite=document.createElement("div");
  kite.className="kite";
  scene.appendChild(kite);

  const rope=document.createElement("canvas");
  rope.width=innerWidth;
  rope.height=innerHeight;
  rope.className="rope";
  scene.appendChild(rope);
  const ctx=rope.getContext("2d");

  let angle=Math.random()*Math.PI;
  let baseX=innerWidth/2;
  let baseY=innerHeight*0.85;

  function animate(){
    angle+=0.02;
    x+=Math.sin(angle)*WIND_POWER;
    y+=Math.cos(angle)*0.15;

    kite.style.left=x+"px";
    kite.style.top=y+"px";

    ctx.clearRect(0,0,rope.width,rope.height);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.quadraticCurveTo(
      (x+baseX)/2,y+120,
      baseX,baseY
    );
    ctx.strokeStyle="rgba(60,60,60,.7)";
    ctx.lineWidth=2;
    ctx.stroke();

    requestAnimationFrame(animate);
  }
  animate();
}

/* KITE ROWS */
createKite(innerWidth*0.2,innerHeight*0.35);
createKite(innerWidth*0.3,innerHeight*0.15);
createKite(innerWidth*0.4,innerHeight*0.22);
createKite(innerWidth*0.5,innerHeight*0.32);
createKite(innerWidth*0.6,innerHeight*0.28);
createKite(innerWidth*0.7,innerHeight*0.28);
