function calculateCaloriesHarrisBenedict(gender, weight, height, age, activityLevel) {
    // Constantes usadas na fórmula
    const BMR_MALE = 88.362;
    const BMR_FEMALE = 447.593;
    let bmr;
  
    // Determina o valor base (BMR) com base no gênero
    if (gender.toLowerCase() === 'M') {
      bmr = BMR_MALE + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender.toLowerCase() === 'F') {
      bmr = BMR_FEMALE + 9.247 * weight + 3.098 * height - 4.330 * age;
    } else {
      throw new Error('Gênero inválido. Use "F" ou "M".');
    }
  
    // Multiplica pelo fator de atividade
    const totalCalories = bmr * activityLevel;
  
    return totalCalories;
  }
  export default calculateCaloriesHarrisBenedict