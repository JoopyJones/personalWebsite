import Sketch from "react-p5";
import {drawing} from "../leJoopPath"

export default function Background(){
    var x = [];
    var y = [];
    var fourierX =[];
    var fourierY = [];
    var time = 0;
    var path = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.frameRate(23);
        const skip = 1;
        for (let i = 0; i < drawing.length; i+=skip) {
          x.push((drawing[i].x*.9));
          y.push((drawing[i].y*.9)+ 30);
        }
        fourierX = dft(p5, x);
        fourierY = dft(p5, y);

        fourierX.sort((a, b) => b.amp - a.amp);
        fourierY.sort((a, b) => b.amp - a.amp);
    }
    
    const draw = p5 => {
        p5.background('#0d1117');

        let vx = epiCycles(p5, p5.width / 2, 90, 0, fourierX);
        let vy = epiCycles(p5, 150, p5.height / 2 + 75, p5.HALF_PI, fourierY);
        let v = p5.createVector(vx.x, vy.y);
        path.unshift(v);

        p5.stroke(255,255,255,50)
        p5.line(vx.x, vx.y, v.x, v.y);
        p5.line(vy.x, vy.y, v.x, v.y);

        p5.beginShape();
        p5.stroke(255);
        p5.noFill();
        for (let i = 0; i < path.length; i++) {
          p5.vertex(path[i].x, path[i].y);
        }
        p5.endShape();

        const dt = p5.TWO_PI / fourierY.length;
        time += dt;

        if (time > p5.TWO_PI) {
          time = 0;
          // path = [];
        }
    }

    const epiCycles = (p5, x, y, rotation, fourier)=> {
        for (let i = 0; i < fourier.length; i++) {
          let prevx = x;
          let prevy = y;
          let freq = fourier[i].freq;
          let radius = fourier[i].amp;
          let phase = fourier[i].phase;
          x += radius * p5.cos(freq * time + phase + rotation);
          y += radius * p5.sin(freq * time + phase + rotation);

          p5.stroke(255,255,255,50)
          p5.noFill();
          p5.ellipse(prevx, prevy, radius*2);
          p5.stroke(255);
          p5.line(prevx, prevy, x, y);
        }
        return p5.createVector(x, y);
      }

    const dft = (p5, x) =>{
        const X = [];
        const N = x.length;
        for (let k = 0; k < N; k++) {
          let re = 0;
          let im = 0;
          for (let n = 0; n < N; n++) {
            const phi = (p5.TWO_PI * k * n) / N;
            re += x[n] * p5.cos(phi);
            im -= x[n] * p5.sin(phi);
          }
          re = re / N;
          im = im / N;
      
          let freq = k;
          let amp = p5.sqrt(re * re + im * im);
          let phase = p5.atan2(im, re);
          X[k] = { re, im, freq, amp, phase };
        }
        return X;
      }
    
    return <section id="background">
                <Sketch setup={setup} draw={draw} />
            </section>
}