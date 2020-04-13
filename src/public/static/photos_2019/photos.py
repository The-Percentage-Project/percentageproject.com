import os
import io

with open("list_photos.txt") as f: 
    lines = f.readlines(); 

    names = [i.split()[0] for i in lines]
    print("var photos = [")
    [print("{src: 'https://raw.githubusercontent.com/The-Percentage-Project/percentageproject.com/master/photos/photos_compressed/%s', width: 4},"%i) for i in names]
    print("]")
    print("export default photos")

    f.close()