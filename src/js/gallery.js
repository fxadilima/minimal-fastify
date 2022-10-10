const hbs = require('handlebars');
const strTest = `<div class="w3-card-4 w3-col m3 l3 w3-mobile"><img src="{{source}}" alt="{{altText}}" width="100%"></div>`;
const t = hbs.compile(strTest);

const images = [
    {
        source: "https://res.cloudinary.com/drzjshskk/image/upload/v1664385008/me-at-cloud/oracle-bone_qdeiab.jpg",
        altText: "Oracle Bone"
    },
    {
        source: "https://res.cloudinary.com/drzjshskk/image/upload/v1664376790/me-at-cloud/logo-sejarah_jyvvfa.jpg",
        altText: "Logo Sejarah"
    },
    {
        source: "https://res.cloudinary.com/drzjshskk/image/upload/v1664376144/me-at-cloud/banner-1_nqkzyr.jpg",
        altText: "Banner"
    },
    {
        source: "https://res.cloudinary.com/drzjshskk/image/upload/v1664607368/oracle-bones/oracle-bones-1_pqcllz.jpg",
        altText: "Oracle Bone 2"
    },
    {
        source: "https://res.cloudinary.com/drzjshskk/image/upload/v1663937773/me-at-cloud/Think-Peace-1_efbzka.jpg",
        altText: "Saya dan teman-teman"
    }
];

exports.gallery = function () {
    let html = `<div class="w3-row-padding">`;
    for (let img of images) {
        html += t(img) + "<br/>";
    }
    
    html += "</div>";
    return {contents: html};    
}
