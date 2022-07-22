import { Request, Response } from "express";
import { PostService } from "../services/PostService";

export const all = async (req: Request, res: Response) => {
    const posts = await PostService.findAll();
    return res.status(200).json({posts});
}

export const one = async (req: Request, res: Response) => {
    const post = await PostService.getOne(parseInt(req.params.id));
    if(post) {
        return res.status(200).json({post});
    }

    return res.status(200).json({error: "Nenhum post encontrado"});
}

export const create = async (req: Request, res: Response) => {
    const { title, body, author } = req.body;

    if(title && body && author) {
        
    }

    return res.status(400).json({ error: "Envie todos os dados!" });
}

export const tooglePost = async (req: Request, res: Response) => {
    return res.json({});
}

export const deletePost = async (req: Request, res: Response) => {
    return res.json({});
}