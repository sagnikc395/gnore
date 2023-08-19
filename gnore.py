import requests
import json


BASE_URL: str = `https://raw.githubusercontent.com/github/gitignore/main/`;


def main():
    print( `gnore v.0.1 \n Enter comma seperated programming languages to generate gitingore for`)
    queries = input('').strip().split(',')
    for query in queries:
        q = requests.get(f"{BASE_URL}${query}.gitignore")
        text = q.text
        fileStatus = input('Use default File ? (Y/n)')
        if(fileStatus.lower()=="y"):
            with open(fileName,'w') as f:
                f.write(text)
            print(f"Written ${query}'s gitignore to .gitignore ! Cheers !!")
        else:
            fileName = input("Enter file name : ")
            with open(fileName,'w') as f:
                f.write(text)
            print(f"Written ${query}'s gitignore to ${fileName} ! Cheers !! ")


if __name__ == '__main__':
    main()
