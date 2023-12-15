import { createAsyncThunk } from "@reduxjs/toolkit";
import { CharacterType } from "@/state/types";

export const importCharacter = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        try {
          const importedCharacter = JSON.parse(event.target.result as string);
          resolve(importedCharacter);
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error("Event target is null"));
      }
    };
    reader.readAsText(file);
  });
};

export const loadCharacter = createAsyncThunk(
  "char/loadCharacter",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";

      return new Promise((resolve, reject) => {
        fileInput.addEventListener("change", async (event: Event) => {
          if (event.target instanceof HTMLInputElement) {
            const files = event.target.files;
            if (files && files.length > 0) {
              try {
                const file = files[0];
                const importedCharacter = await importCharacter(file);
                // @ts-ignore
                resolve(importedCharacter);
              } catch (error) {
                reject(error);
              }
            }
          }
        });
        fileInput.click();
      });
    } catch (error) {
      console.error("Failed to load character:", error);
      throw rejectWithValue(error);
    }
  },
);

export const saveCharacter = createAsyncThunk(
  "char/saveCharacter",
  async (character: CharacterType) => {
    const json = JSON.stringify(character);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "character.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return character;
  },
);
