// alert("hello js file")

const FullReviewHandler = (e)=>{
    console.log(e.target.id)

    if(e.target.innerHTML === "Close"){
        document.getElementById(e.target.id).innerHTML = "Read Full Review";
    document.getElementById("Review" +e.target.id).style.height = "200px";

    }else{

        document.getElementById(e.target.id).innerHTML = "Close";
    document.getElementById("Review" +e.target.id).style.height = "700px";

    }
    

}


document.addEventListener('DOMContentLoaded', () => {
    fetch('reviews.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('reviewsContent').innerHTML = html;
        });
});