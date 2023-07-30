class Watch {
    constructor(time, cur) {
        this.time = time;
        this.cur = cur;

        this.diff = () => {
            return this.cur - this.time;
        };

        this.timeEnd = () => {
            return {
                day: Math.floor(this.diff() / 1000 / 60 / 60 / 24),
                hour: Math.floor(this.diff() / 1000 / 60 / 60) % 24,
                min: Math.floor(this.diff() / 1000 / 60) % 60,
                sec: Math.floor(this.diff() / 1000) % 60,
            };
        };

        this.arr = () => {
            let { day, hour, min, sec } = this.timeEnd();
            return [hour, min, sec];
        };
    }
}

setInterval(() => {
    let watch = new Watch(new Date(), new Date(`${new Date().toDateString() + " 22:00:00"}`));
    for (var i = 0; i < 3; i++) {
        document.querySelector(".watch").children[i * 2].innerHTML =
            watch.arr()[i] < 10 ? "0" + watch.arr()[i] : watch.arr()[i];
    }
}, 1000);
