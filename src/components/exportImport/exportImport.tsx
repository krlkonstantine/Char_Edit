import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CharacterType } from "@/state/types";
import {importCharacter, saveCharacter} from "@/state/character.slice";
import {loadCharacterFulfilled} from "@/state/characterActions";

type PropsType = {
    character: CharacterType
};

const CharacterManagement: FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const [loadedCharacterData, setLoadedCharacterData] = useState<string | null>(null);


    const handleLoadCharacter = useCallback(async () => {
        try {
            const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.accept = ".json";

            const filePromise = new Promise<File | null>((resolve) => {
                fileInput.addEventListener("change", (event) => {
                    const files = (event.target as HTMLInputElement).files;
                    resolve(files ? files[0] : null);
                });
            });

            fileInput.click();

            const selectedFile = await filePromise;

            if (selectedFile) {
                const importedCharacterData = await importCharacter(selectedFile);
                dispatch(loadCharacterFulfilled({ data: importedCharacterData }));
            }
        } catch (error) {
            console.error("Failed to load character:", error);
        }
    }, [dispatch]);


    const handleSaveCharacter = useCallback(async () => {
        const resultAction = await dispatch(saveCharacter(props.character));

        console.log('Save character result:', resultAction);
    }, [dispatch, props.character]);

    return (
        <div>
            <button onClick={handleLoadCharacter}>Загрузить персонажа</button>
            <button onClick={handleSaveCharacter}>Сохранить персонажа</button>
        </div>
    );
};

export default CharacterManagement;
