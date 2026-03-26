
// this takes data, and duplicates it back to back
// some examples of this being used in real use application is if you were to use this to loop a carousel or a list of items.
// and you wanted it to feel infinite and seamless.

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {

        // vector<int> = allows you to store integers.
        // it can also grow automatically as we add elements


        // nums = the input array (passed by reference, so we don't copy it
        // and means we are working with the original array, not a copy )

        // create a result array to store our answer
        vector<int> result;

        // first pass:
        // loop through each number in nums
        for (int nums : nums) {
            result.push_back(num)
        }

        // second pass:
        for (int num : nums){
            result.push_back(num);
        }

        return result;

        // create a result array to store the final answer;

    }
};
