// A list showing a programmer skills in detail
var deveoplerSkills = {
    languages: ["Javascript", "Typescript", "Python"],
    tools: ["Git", "Webpack", "Dockes"],
    frameWork: ["React", "Angular", "Vue"]
};
//list of skills
var languages = deveoplerSkills.languages, frameWork = deveoplerSkills.frameWork, tools = deveoplerSkills.tools;
// showing skills from each category
console.log("language: ".concat(languages[0], " ").concat(frameWork[0], " ").concat(tools[0]));
