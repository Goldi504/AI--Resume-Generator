const pdfParse = require("pdf-parse")
const generateInterviewReport = require ("../services/ai.services")
const interviewReportModel = require("../models/interviewReport.model")

async function generateInterViewReportController(req,res){

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const {selfDescription , jobDescription }= req.body

    const interviewReportByAi = await generateInterViewReport({
        resume: resumeContent,text,
        selfDescription,
        jobDescription
    })

    const interviewReport = await interviewReportModel.create({
        user :req.user.id,
        resume: resumeContent,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })
    res.status(201).json({
        message : "Interview report generated successfuly",
        interviewReport
    })
}


module.exports = {generateInterViewReportController}