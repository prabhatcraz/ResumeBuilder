function PageController(argument) {
}

PageController.prototype = {
    construction: PageController,

    getEditorcontent: function() {
        try {
            var resumeData = this.editor.getValue();

            resumeData = JSON.parse(resumeData);

            return resumeData;
        } catch (err) {
            // alert("Something wrong with your JSON");
        }
    },

    refreshResume: function() {
        console.log("change received");
        var builder = new ResumeBuilder(this.getEditorcontent());
        builder.render();
    },

    save: function() {
        localStorage.resumeContent = self.editor.getValue();
        $(".savedMessage").show().delay(1000).fadeOut();
    },

    render: function() {
        var self = this;
        this.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            matchBrackets: true,
            mode: "application/ld+json",
            continueComments: "Enter",
            extraKeys: { "Ctrl-Q": "toggleComment" },
        });

        this.editor.on("change", function() {
            self.refreshResume();
            // self.save();
        });
        var editoContent = localStorage.resumeContent || JSON.stringify(resumeData, null, 2);
        self.editor.setValue(editoContent);

        $("#genratePdf").click(function(event) {
            event.preventDefault();
            self.refreshResume();
            window.print();
        });

        $("#save").click(function(event) {
            event.preventDefault();
            localStorage.resumeContent = self.editor.getValue();
        });

        $(document).keyup(function(e) {
            if (e.keyCode == 27) { // escape key maps to keycode `27`
                $("#container").html("");
            }
        });

        self.refreshResume();
    }
};