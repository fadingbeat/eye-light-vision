var frame = new window.Frame("fit", 1024, 768, "#85d48b", window.dark);
frame.on("ready", () => {

    const stage = frame.stage;
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
        new window.Emitter({
            obj: [new window.Rectangle(12, 12, "#214d24"),
            new window.Circle(14, "#214d24")
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

export default frame;