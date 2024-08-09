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


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response1 = await fetch('videoContact.html');
        const html1 = await response1.text();
        document.getElementById('videoContact').innerHTML = html1;

        const response2 = await fetch('reviews.html');
        const html2 = await response2.text();
        document.getElementById('reviewsContent').innerHTML = html2;
    } catch (error) {
        console.error('Error loading content:', error);
    }
});