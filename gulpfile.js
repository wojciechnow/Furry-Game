
// Sass -> css
var gulp = require ('gulp');
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
gulp.task('sass', function () {
        return gulp.src('scss/main.scss')
            .pipe(sourcemaps.init() ) // Inicjalizacja map kodu zrodlowego
            .pipe( sass().on('error', sass.logError)) // wyswietlanie bledow w konsoli
            .pipe( autoprefixer({
                browsers:['last 4 versions']
            }))
            .pipe( sass({
                outputStyle: 'compressed'
            })) // uruchomienie konwersji sass do css w kompresji
            .pipe( sourcemaps.write()) // dopisanie map kodu zrodlowego do css
            .pipe(gulp.dest('css')) // zapis pliku css do folderu css
            .pipe(browserSync.stream())

    });


// obserwator plikow
gulp.task('watch', function () {
    browserSync.init({
        server:".",
        notify:true,
        open:true
    });
    gulp.watch('scss/**/*.scss', ['sass']);// obseerw sassa
    gulp.watch('./index.html', browserSync.reload);// obserw htmla
});