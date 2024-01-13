#This file is made for getting card names from the folder of images

import os

def convert_file_names(folder_path):
    file_names = []
    if not os.path.exists(folder_path):
        print(f"Error: Folder '{folder_path}' does not exist.")
        return
 
    for filename in os.listdir(folder_path):
        if filename.endswith(".avif"):
            base_name = os.path.splitext(filename)[0]
            if '-' in base_name:  
                parts = base_name.rsplit('-', 1)
                if len(parts) == 2:    
                    new_name = f"{parts[0].capitalize()} {parts[1]}"
                    file_names.append(new_name)
            else:
                new_name = base_name[:-1] + ' ' + base_name[-1]
                file_names.append(new_name)
    
    return file_names
folder_path = "images/champion"

result = convert_file_names(folder_path)
print(result)
