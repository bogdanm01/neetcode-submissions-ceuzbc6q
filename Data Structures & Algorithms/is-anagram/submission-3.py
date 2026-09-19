class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # s_len = len(s)
        # t_len = len(t)

        # if s_len != t_len:
        #     return False

        s_dict = {}
        t_dict = {}

        for char in s:
            if char in s_dict:
                s_dict[char]+=1
            else:
                s_dict[char]=1

    
        for char in t:
            if char in t_dict:
                t_dict[char]+=1
            else:
                t_dict[char]=1

        return s_dict == t_dict
        
