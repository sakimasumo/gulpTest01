"use strict";

let gulp = require("gulp")
let browserSync = require("browser-sync").create()


gulp.task("copy", function() {
    return gulp.src([
            "_resource/**/*"
            // _resourceのすべてのフォルダの中のすべてのファイルという意味↑
        ])
        .pipe(gulp.dest("html/"))
})

gulp.task("default", function() {
    browserSync.init({
        server: {
            baseDir: "html"
        },
        browser: 'chrome'
    })
    gulp.watch(["_resource/**/*"], ["copy"])
})