class Recipe {
    constructor(recipes) {
        this._id = recipes.id,
        this._name = recipes.name,
        this._servings = recipes.servings
        this._ingredients = recipes._ingredients
        this._time = recipes._time
        
        this._appliance = recipes._appliance
        this._ustensils = recipes._ustensils
    }

    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get servings() {
        return this._servings
    }
    get ingredients() {
        return "new Ingredient"()
    }
    get time() {
        return this._time
    }
    get description() {
        return this._description
    }
    get appliance() {
        return this._appliance
    }
    get ustensils() {
        return this._ustensils
    }


}