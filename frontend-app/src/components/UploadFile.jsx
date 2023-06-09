import { React, useEffect, useRef } from "react";

export default function UploadFile(){
        const cloudinaryRef = useRef(); 
        const widgetRef = useRef(); 

        const containerRef = useRef(null);
    
        useEffect(() => {

            // link referensi gallery : https://www.youtube.com/watch?v=01dy6J9PXzY

            if(window && containerRef.current) {
                window.cloudinary.galleryWidget({
                    container: containerRef.current,
                    cloudName: 'dzqwvqaf3',
                    mediaAssets: [
                        { tag: 'gallery-images' }, { tag: 'gallery-videos', mediaType: 'video' }
                    ],
                }).render();
            }

            // link referensi upload widget : https://www.youtube.com/watch?v=paiO6M2wBqE

            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                    cloudName: 'dzqwvqaf3',
                    uploadPreset: 'aliklqan'
            }, function(error, result) {
                    console.log(result, "==> Ini hasil upload");
            })
            }, [])
    
        return(
            <div>
                <div ref={containerRef} style={{ width: '1200px', margin: 'auto'}} />
                <div style={{ textAlign: 'center' }}>
                    <button onClick={() => widgetRef.current.open()}>
                        Upload
                    </button>
                </div>
                

             </div>
        )
}