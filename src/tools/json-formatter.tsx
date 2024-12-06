'use client';

import { StorageKeys } from '@/common/enums/storage-keys.enum';
import { handleCopy } from '@/common/utils/copy.util';
import PrimaryButton from '@/components/buttons/primary';
import SecondaryButton from '@/components/buttons/secondary';
import {
  Card,
  CardActionButton,
  CardActions,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { ConfigurationItem } from '@/components/configuration-item';
import SelectBox from '@/components/forms/select-box';
import Textarea from '@/components/forms/textarea';
import Toggle from '@/components/forms/toggle';
import { useEffect, useState } from 'react';

interface JsonFormatterConfigs {
  indentation: string;
  sortKeys: boolean;
  input: string;
}

const DEFAULT_CONFIGS: JsonFormatterConfigs = {
  indentation: '2',
  sortKeys: false,
  input: '{"name":"DevEase","age":1,"isAdmin":false}',
};

const INDENTATIONS = [
  { text: 'Minify', value: '0', indentation: 0 },
  { text: '2 spaces', value: '2', indentation: 2 },
  { text: '4 spaces', value: '4', indentation: 4 },
  { text: '1 Tab', value: '\t', indentation: '\t' },
];

export default function JsonFormatterTool() {
  const [configs, setConfigs] = useState<JsonFormatterConfigs>(DEFAULT_CONFIGS);
  const [outputJson, setOutputJson] = useState<string>('');

  useEffect(() => {
    const lastConfigs = localStorage.getItem(StorageKeys.JsonFormatterConfigs);
    if (lastConfigs) {
      const parsedConfigs = JSON.parse(lastConfigs);
      setConfigs(parsedConfigs);
    }
  }, []);

  function sortObjectKeys<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(sortObjectKeys) as T;
    }

    return Object.keys(obj)
      .sort((a, b) => a.localeCompare(b))
      .reduce((sortedObj, key) => {
        sortedObj[key] = sortObjectKeys((obj as Record<string, unknown>)[key]);
        return sortedObj;
      }, {} as Record<string, unknown>) as T;
  }

  const formatJson = (configs: JsonFormatterConfigs) => {
    if (!configs.input) {
      setOutputJson('');
      return;
    }

    try {
      const parsedObject = JSON.parse(configs.input);
      const sortedObject = configs.sortKeys
        ? sortObjectKeys(parsedObject)
        : parsedObject;
      const formattedJson = JSON.stringify(
        sortedObject,
        null,
        INDENTATIONS.find((i) => i.value === configs.indentation)?.indentation
      );
      setOutputJson(formattedJson);
    } catch (error: unknown) {
      setOutputJson((error as Error).message);
    }
  };

  useEffect(() => {
    localStorage.setItem(
      StorageKeys.JsonFormatterConfigs,
      JSON.stringify(configs)
    );
    formatJson(configs);
  }, [configs]);

  return (
    <div>
      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <ConfigurationItem
            icon='fa-sliders-h'
            label='Indentation'
            description='Select the indentation style.'
          >
            <div className='w-36'>
              <SelectBox
                options={INDENTATIONS}
                value={configs.indentation}
                onChange={(value) => {
                  setConfigs((prev) => ({ ...prev, indentation: value }));
                }}
              />
            </div>
          </ConfigurationItem>
          <ConfigurationItem
            icon='fa-horizontal-rule'
            label='Sort Keys'
            description='Sort the keys of the JSON object.'
          >
            <Toggle
              checked={configs.sortKeys}
              onChange={(value) => {
                setConfigs((prev) => ({ ...prev, sortKeys: value }));
              }}
            />
          </ConfigurationItem>
        </CardContent>
        <CardFooter>
          <div className='flex gap-3'>
            <SecondaryButton onClick={() => setConfigs(DEFAULT_CONFIGS)}>
              Reset
            </SecondaryButton>
            <PrimaryButton onClick={() => formatJson(configs)}>
              Format
            </PrimaryButton>
          </div>
        </CardFooter>
      </Card>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Input */}
        <Card className='mt-5'>
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={configs.input}
              onChange={(value) =>
                setConfigs((prev) => ({ ...prev, input: value }))
              }
              rows={30}
            />
          </CardContent>
        </Card>

        {/* Output */}
        <Card className='mt-5'>
          <CardHeader>
            <CardTitle>Output</CardTitle>
            <CardActions>
              <CardActionButton onClick={() => handleCopy(outputJson)}>
                <i className='far fa-fw fa-copy'></i>
                Copy
              </CardActionButton>
            </CardActions>
          </CardHeader>
          <CardContent>
            <div className='flex w-full'>
              <Textarea value={outputJson} disabled={true} rows={30} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
