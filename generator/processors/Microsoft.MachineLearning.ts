import { SchemaPostProcessor } from '../models';
import { replaceCyclicRef } from './helpers';

export const postProcessor: SchemaPostProcessor = async (namespace: string, apiVersion: string, schema: any) => {
  replaceCyclicRef(schema.definitions?.ModeValueInfo?.properties?.parameters?.oneOf[0]?.items);
}