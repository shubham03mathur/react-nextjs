"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
    const inputImage = useRef();
    const [previewImage, setPreviewImage] = useState(null);
    const handleClick = () => {
        inputImage.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setPreviewImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPreviewImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!previewImage && <p>Select meal's image</p>}
                    {previewImage && (
                        <Image
                            src={previewImage}
                            alt='An meal image picked by user.'
                            fill
                        />
                    )}
                </div>

                <input
                    className={classes.input}
                    type='file'
                    accept='image/png, image/jpeg'
                    name={name}
                    id={name}
                    ref={inputImage}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type='button'
                    onClick={handleClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
