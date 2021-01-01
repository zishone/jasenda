import 'express';

declare global {
  namespace Express {
    interface Response {
      jsend: {
        success: (data: any, statusCode?: number) => void;
        fail: (data: any, statusCode?: number) => void;
        error: (message: string, statusCode?: number, code?: number, data?: any) => void;
      };
    }
  }
}
