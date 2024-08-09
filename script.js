// alert("hello js file")

document.addEventListener('DOMContentLoaded', async () => {
    try {

        const response2 = await fetch('reviews.html');
        const html2 = await response2.text();
        document.getElementById('reviewsContent').innerHTML = html2;
        
        const response1 = await fetch('videoContact.html');
        const html1 = await response1.text();
        document.getElementById('videoContact').innerHTML = html1;

       
    } catch (error) {
        console.error('Error loading content:', error);
    }
});


