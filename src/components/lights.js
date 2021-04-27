const frame_lights = new window.Frame("fit", 1024, 768, window.light, window.dark);
frame_lights.on("ready", () => {
    const stage = frame_lights.stage;
    let stageH = frame_lights.height;

    let circle = new window.Circle(50, window.red)
    circle.pos(circle.width / 2, stageH / 2)
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

    stage.update();
});

export default frame_lights;