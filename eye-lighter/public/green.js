let scaling = "fit";
let width = 1024;
let height = 768;
let color = "#85d48b";
let outerColor = dark;

var frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", () => {
    zog("ready from ZIM Frame");

    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;

    let targetBlob = new Blob({ points: "rectangle" });
    let blob = new Blob({ radius: 370, points: "circle", interactive: false, color: "#214d24" })
        .pos(200, 200)
        .transformPoints("circle", -45)
        .center()
        .animate({
            props: { shape: targetBlob, scale: 0 },
            time: 6,
            rewind: true,
            loop: true,
            loopCount: 4,
            call: burstBubbles
        });

    function burstBubbles() {
        blob.sca(0)
        let particles = new Emitter({
            obj: [new Rectangle(12, 12, "#214d24"),
            new Circle(14, "#214d24")
            ],
            num: 2,
            life: 4,
            interval: .01,
            gravity: 1,
            shrink: true,
            decayTime: 5,
        }).centerReg()

    };

    stage.update();

});