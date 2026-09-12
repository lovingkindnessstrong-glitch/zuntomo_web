import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const labCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lab" }),
  schema: z.object({
    // イベント概要
    event_name: z.string(),
    venue: z.string(),
    address: z.string(),
    map_iframe: z.string(),
    program_name: z.string(),
    performance_date: z.string(),
    performance_time: z.string(),
    assembly_time: z.string(),
    assembly_place: z.string(),
    dress_code: z.string(),
    date: z.date(), // 内部ソート用
    
    // 香盤表（複数曲）
    setlist: z.array(z.object({
      order: z.number(),
      title: z.string(),
      youtube_id: z.string().length(11),
      start_type: z.string(),
      start_foot: z.string(),
      performers: z.string().optional(), // 追加：出演者
      notes: z.string().optional(),
    }))
  })
});

export const collections = {
  'lab': labCollection,
};