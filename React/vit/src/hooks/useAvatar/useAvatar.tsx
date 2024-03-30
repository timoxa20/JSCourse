import {useEffect, useState} from "react";

interface useAvatarProps {
    initialValue: File | null;
}

export const useAvatar = ({initialValue}: useAvatarProps) => {
    const [image, setImage] = useState<File | null>(initialValue);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = event.target.files[0];
        setImage(file);
    };

    useEffect(() => {
        const saveImageToLocalStorage = async () => {
            if (image) {
                try {
                    const imgData = await getBase64Image(image);
                    localStorage.setItem("imgData", imgData);
                } catch (error) {
                    console.error('Ошибка при сохранении изображения в localStorage:', error);
                }
            }
        };

        saveImageToLocalStorage();
    }, [image]);

    function getBase64Image(img: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result as string;
                resolve(base64String);
            };
            reader.onerror = reject;
            reader.readAsDataURL(img);
        });
    }

    return {
        image,
        handleImageChange
    };
}

