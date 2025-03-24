'use client';
import { ReactNode, useState } from 'react';

import { StepsProps } from '@/utils/interfaces/steps';

export default function Steps({
  labels,
  children,
  labelAction,
  action,
  cofirmNextStep,
}: StepsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const noPreviousStep = () => {
    return currentStep === 0;
  };

  const noNextStep = () => {
    return currentStep === labels.length - 1;
  };

  const previousStep = () => {
    if (noPreviousStep()) return;
    setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    if (noNextStep()) return;
    setCurrentStep(currentStep + 1);
  };

  const renderLabels = () => {
    return (
      <div className="flex gap-4 select-none">
        {labels.map((label, i) => {
          const selected = currentStep === i;
          return (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center ${selected ? 'bg-white text-black' : 'bg-zinc-700'}`}
              >
                {i + 1}
              </span>
              <span className={selected ? 'text-white' : 'text-zinc-600'}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  const confirmNextStep = cofirmNextStep?.[currentStep] ?? true;

  return (
    <div className="flex-1 flex flex-col gap-10 w-full">
      <div className="self-center">{renderLabels()}</div>
      <div className="">{children[currentStep]}</div>
      <div className="flex justify-between">
        <button
          className={`button ${noPreviousStep() ? 'bg-zinc-400 cursor-not-allowed opacity-50' : 'bg-zinc-700 hover:bg-zinc-600 text-white'}`}
          disabled={noPreviousStep()}
          onClick={previousStep}
        >
          <span>Anterior</span>
        </button>
        {noNextStep() ? (
          <button
            className={`button bg-green-700 hover:bg-green-600 text-white 
              ${
                !confirmNextStep
                  ? 'bg-zinc-400 cursor-not-allowed opacity-50'
                  : 'bg-green-700 hover:bg-green-600 text-white'
              }`}
            disabled={!confirmNextStep}
            onClick={action}
          >
            <span>{labelAction}</span>
          </button>
        ) : (
          <button
            className={`button 
              ${
                !confirmNextStep || noNextStep()
                  ? 'bg-zinc-400 cursor-not-allowed opacity-50'
                  : 'bg-green-700 hover:bg-green-600 text-white'
              }`}
            disabled={!confirmNextStep || noNextStep()}
            onClick={nextStep}
          >
            <span>Proximo</span>
          </button>
        )}
      </div>
    </div>
  );
}
