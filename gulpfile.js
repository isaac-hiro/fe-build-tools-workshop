const gulp = require('gulp');
const clean = require('gulp-clean');

const imgSrc = 'img/*';
const imgDest = 'build/img';
const imgDelDest = 'build/img';

gulp.task('delete-images', () => {
    return gulp.src(imgDelDest)
        .pipe(clean());
});

gulp.task('copy-images', () => {
    return gulp.src(imgSrc)
        .pipe(gulp.dest(imgDest));
});

gulp.task('images', ['delete-images', 'copy-images']);