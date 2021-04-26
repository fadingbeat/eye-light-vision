const frame = new Frame("fit", 1024, 768, light, dark);
frame.on("ready", () => {
    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    let circle = new Circle(50, red)
    let position = circle.pos(circle.width / 2, stageH / 2)
    let regX = circle.width / 2
    let regY = circle.height / 2

    circle.reg(regX, regY)

    let blob_path = new Blob({
        color: "rgba(0,0,0,0)",
        controlType: "none",
        showControls: false,
        lockControlType: true,
        points:
            [[450, -250, 10, 0, 0, 0, 0, 0, "none"],
            [-500, -250, 10, 0, 0, 0, 0, 0, "none"],
            [450, 250, 0, 10, 0, 0, 0, 0, "none"],
            [-500, 250, 0, 10, 0, 0, 0, 0, "none"]]
    }).center();

    circle.animate({ props: { path: blob_path }, time: 20, loop: true, loopCount: 1, ease: "back", rewind: true, call: done });

    function done(target) {
        target.color = "blue";
        target.animate({ props: { path: blob_path }, time: 8, loop: true, loopCount: 1, rewind: true, call: stopFirstAnimation });
    };
    function stopFirstAnimation(target) {
        target.alpha = 0;
    }

    stage.update(); // needed to view changes
});
