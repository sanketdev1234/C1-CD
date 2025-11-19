const sum=require("./sum").sum;
test("the sum of 2+2 is 4",()=>{
    expect(sum(2,2)).toBe(4)
});