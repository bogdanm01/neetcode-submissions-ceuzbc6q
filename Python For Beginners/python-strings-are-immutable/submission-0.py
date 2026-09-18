def remove_fourth_character(word: str) -> str:
    left = word[:3] # first 3 Neet
    right = word[4:]
    return left + right


# do not modify below this line
print(remove_fourth_character("NeetCode"))
print(remove_fourth_character("Hello"))
