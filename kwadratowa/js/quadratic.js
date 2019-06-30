const btn = document.querySelector('.count');

let count = () => {
    let a = document.querySelector('.a').value;
    let b = document.querySelector('.b').value;
    let c = document.querySelector('.c').value;
    calcQuadratic(a,b,c);
}

let calcQuadratic = (a,b,c) => {
    const output = document.querySelector('.result');
    let delta = Math.pow(b, 2) - 4*a*c;

    if (delta>0) {

        let x1 = Math.round((-b - Math.sqrt(delta)) / 2 * a);
        let x2 = Math.round((-b + Math.sqrt(delta)) / 2 * a);

        output.innerHTML = (`Delta wynosi: ${delta}, <br> x1 = ${x1.toFixed(2)}, <br> x2 = ${x2.toFixed(2)}`);

    } else if (delta === 0) {
        let x0 = (-b)/2*a;
        output.innerHTML = (`Delta = ${delta}, <br> x0 = ${x0.toFixed(2)}`);
    } else {
        output.innerHTML = ('Urojone, nie liczone');
    }
}

btn.addEventListener('click', count);