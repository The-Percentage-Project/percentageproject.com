import os
import io

with open("rutgers.txt") as f: 
    lines = f.readlines(); 

    names = [i.split()[0] for i in lines]
    print("var rutgers = [")
    [print("{src: 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Photoshoots/Rutgers/%s', width: 4},"%i) for i in names]
    print("]")
    print("export default rutgers")

    f.close()