type KeyboardingAvoidingViewBehavior = 'padding' | 'height' | 'position';

type ErrorMessage = {
  message: string;
  code: string;
};

interface ApiErrors {
  errors: ErrorMessage[];
}

type SpaceSize = 'sm' | 'base' | 'md' | 'lg' | 'xl';
