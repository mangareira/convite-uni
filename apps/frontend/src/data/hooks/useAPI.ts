import { useCallback } from 'react';

const urlBase = process.env.NEXT_PUBLIC_API_URL;


export default function useAPI() {
  const httpGet = useCallback(async <D = any>(path: string) => {
    const uri = path.startsWith('/') ? path : `${path}`;
    const urlComplete = `${urlBase}/${uri}`;
    const res = await fetch(urlComplete);
    return extractData<D>(res);
  }, []);

  const httpPost = useCallback(async <T, D>(path: string, body: D) => {
    const uri = path.startsWith('/') ? path : `${path}`;
    const urlComplete = `${urlBase}/${uri}`;

    function formatDateToBR(date: Date): string {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');

      return `${year}/${month}/${day} ${hours}:${minutes}`;
    }

    const replacer = (key: string, value: any) => {
      if (value instanceof Date) {
        return formatDateToBR(value); // Formato BR com hora
      }
      return value;
    };

    const res = await fetch(urlComplete, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body, replacer) : null, // Aplica o replacer
    });

    return extractData<T>(res);
  }, []);

  async function extractData<D>(response: Response) {
    let data: D;

    try {
      data = await (<D>response.json());
    } catch (error) {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return null;
    }
    if (!response.ok) throw data;
    return data;
  }

  const httpPostBlob = useCallback(async <T, D>(path: string, body: D) => {
    const uri = path.startsWith('/') ? path : `${path}`;
    const urlComplete = `${urlBase}/${uri}`;
    
    const response = await fetch(urlComplete, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Adicione outros headers necessários
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return await response.arrayBuffer();

  }, []);

  return { httpGet, httpPost, httpPostBlob };
}
