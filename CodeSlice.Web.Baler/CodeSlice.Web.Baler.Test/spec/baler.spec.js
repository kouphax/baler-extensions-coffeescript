describe("Bale Single File", function(){
    it("should successfuly bale a single coffeescript file into javascript without changing the behaviour", function(){
        expect(window.coffeescriptsingle).toBeDefined();
        expect(window.coffeescriptsingle()).toBe('coffeescript-single');
    });
});