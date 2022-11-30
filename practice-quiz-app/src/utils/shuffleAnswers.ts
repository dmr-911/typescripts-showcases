export const shuffleAnswers = (answers:any) => {
    return  [...answers].sort(()=> Math.random() - 0.5)
};
