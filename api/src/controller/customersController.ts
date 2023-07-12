const dataSchema = require('../models/customersSchema')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const SECRET = 'ellen'

import { Request, Response } from 'express'



//Método para visualizar todos os cadastros
export const getAll = async (req: Request, res: Response) => {
    try {
        const notes = await dataSchema.find()
        return res.status(200).json(notes)

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}

export const getPeople = async (req: Request, res: Response) => {
    try {
        const findPeople = await dataSchema.findById(req.params.id)
        if (findPeople) {
            return res.status(200).json(findPeople)
        }

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}

// criar método para cadastrar uma Pessoa 
export const createRegistration = async (req: Request, res: Response) => {
    try {
        const { nome, quantidadeInscritos, canal, plataforma, categoriaConteudo } = req.body;

        if (!nome.trim() || nome === undefined || nome.length <= 1 || nome === '') {
          console.log('Nome está sendo passado indefinidamente.');
        } else if (!quantidadeInscritos || quantidadeInscritos < 0) {
          console.log('Quantidade de inscritos está sendo passada indefinidamente.');
        } else if (!canal.trim() || canal === undefined || canal.length < 1 || canal === '') {
          console.log('Canal está sendo passado indefinidamente.');
        } else if (!plataforma.trim() || plataforma === undefined || plataforma.length < 5 || plataforma === '') {
          console.log('Plataforma está sendo passada indefinidamente.');
        } else if (!categoriaConteudo.trim() || categoriaConteudo === undefined || categoriaConteudo.length < 1 || categoriaConteudo === '') {
          console.log('Categoria do conteúdo está sendo passada indefinidamente.');
        }

        else {
            const newNote = new dataSchema({
                _id: new mongoose.Types.ObjectId(),
                nome,
                quantidadeInscritos,
                canal,
                plataforma,
                categoriaConteudo,
    
            })

            const savedNote = await newNote.save()
            res.status(201).json(savedNote)
        }


    } catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}



// criar método para atualizar informações de uma Pessoa
export const updatePeopleById = async (req: Request, res: Response) => {
    try {
        const findPeople = await dataSchema.findById(req.params.id)
        console.log(findPeople)

        if (findPeople) {
            findPeople.nome = req.body.nome || findPeople.nome
            findPeople.quantiaInscritos = req.body.quantiaInscritos || findPeople.quantiaInscritos
            findPeople.canal = req.body.canal || findPeople.canal
            findPeople.plataforma = req.body.plataforma || findPeople.plataforma
            findPeople.categoriaConteudo = req.body.categoriaConteudo || findPeople.categoriaConteudo

        }
        const savedPeople = await findPeople.save()
        console.log('APÓS ATUALIZAÇÃO', savedPeople)

        res.status(200).json({
            message: "Usuário atualizado com sucesso!!!!",
            savedPeople
        })

    } catch (error) {

    }
}

//Método para deletar pessoa pelo identificador
export const deletePeopleById = async (req: Request, res: Response) => {
    try {
        const peopleFound = await dataSchema.findById(req.params.id)

        await peopleFound.delete()

        res.status(200).json({
            mensagem: `Pessoa '${peopleFound.nome}' deletada com sucesso!`
        })

    }
    catch (err: unknown) {
        const error = err as String
        res.status(500).json({ message: error })

    }
}



