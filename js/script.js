function saveHtml() {
    console.log("Saving");
    localStorage.setItem($("#output").data("resume-template-id"), $("#output").html());
}

function resetHtml() {
    delete localStorage[$("#output").data("resume-template-id")];
    loadPage();
}

function loadPage() {
    $(".resumeSection").each(function() {
        var templateId = $(this).data("template-id");
        console.log(templateId);
        var templateHtml = _.template($("#" + templateId).html())({});

        $(this).html(templateHtml);
    });
}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                console.log(reader.result);
                $(".profileImage").attr("src", reader.result);
                saveHtml(); // need to manually save because for some reason on change is not getting triggred
                
            };
        })(f);

        // Read in the image file as a data URL.
        console.log(reader.readAsDataURL(f));
    }
}

$(document).ready(function() {
    loadPage();
    var savedHtml = localStorage.getItem($("#output").data("resume-template-id"));

    if (savedHtml) {
        $("#output").html(savedHtml);
    }

    $("#output").on("DOMSubtreeModified", _.throttle(saveHtml, 200));
    $("#files").on("change", handleFileSelect);
});