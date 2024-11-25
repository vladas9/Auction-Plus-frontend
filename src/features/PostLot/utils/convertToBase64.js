export var convertToBase64 = async (files) => {
    var img_src = [];

    console.log(files);

    Array.from(files).map((value) => {
        var reader = new FileReader();
        reader.onloadend = function() {
            var base64String = reader.result.split(",")[1];
            img_src.push(base64String);
        };
        reader.readAsDataURL(value);
    });
    return img_src;
};
