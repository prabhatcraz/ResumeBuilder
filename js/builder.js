function ResumeBuilder(data) {
    this.data = data;
    this.templates = {};
    this.templates["container"] = _.template($("#layout").html());
    this.templates["leftSectionTile"] = _.template($("#leftSectionTile").html());
    this.templates["rightSectionGroup"] = _.template($("#rightSectionGroup").html());
}

ResumeBuilder.prototype = {
    constructor: ResumeBuilder,

    render: function() {
        var self = this;
        var container = $("#container");

        // Get the layout
        var layoutTemplate = this.templates["container"];
        var layoutHtml = layoutTemplate({
            imageSrc: this.data.imageUrl,
            name: this.data.name,
            designation: this.data.designation
        });

        $("#container").html(layoutHtml);

        _.each(this.data.leftSection, function(value) {
            var tileTemplate = self.templates["leftSectionTile"];
            var tileHtml = tileTemplate({
                title: value.title,
                detail: value.detail
            });

            $(".bio").append(tileHtml);
        });

        _.each(this.data.rightSection, function(value) {
            var tileTemplate = self.templates["rightSectionGroup"];
            var tileHtml = tileTemplate({
                groupTitle: value.header,
                sections: value.entities
            });

            $(".experience").append(tileHtml);
        });

        $("#printit").click(function() {
            window.print()
        });
        $("#close").click(function() {
            $("#container").html("");
        });
        $(".zoomIn").click(function() {
            var zoomLevel = parseFloat($("#resumeContainer").css("zoom"));
            var nextZoom = zoomLevel + 0.02;
            console.log(nextZoom);
            $("#resumeContainer").animate({ 'zoom': nextZoom }, 0);
        });

        $(".zoomOut").click(function() {
            var zoomLevel = parseFloat($("#resumeContainer").css("zoom"));
            var nextZoom = zoomLevel - 0.02;
            console.log(nextZoom);
            $("#resumeContainer").animate({ 'zoom': nextZoom }, 0);
        });
    }
};

