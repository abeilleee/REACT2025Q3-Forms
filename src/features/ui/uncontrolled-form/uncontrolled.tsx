import { useRef, useState, type FormEvent } from 'react';
import {
  parseDataToFormValues,
  PLACEHOLDER,
  VALID_EXTENSIONS,
  validate,
  type ReturnedErrors,
} from '@/features/lib';
import { useFormStore } from '@/shared/model';

export const UncontrolledForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { countries, setUncontrolledData } = useFormStore();
  const [errors, setErrors] = useState<ReturnedErrors[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      const validationResult = await validate(parseDataToFormValues(data));

      if (validationResult.result) {
        setUncontrolledData(parseDataToFormValues(data));
      }

      setErrors(validationResult.errors);
    }
  };

  return (
    <form className="form" ref={formRef} onSubmit={handleSubmit}>
      <h3 className="text-center">Uncontrolled Form</h3>
      <div className="group-col">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          autoFocus
          type="text"
          placeholder={PLACEHOLDER.NAME}
          autoComplete="name"
        />
        <p className="error">{errors.find((err) => 'name' in err)?.name}</p>
      </div>

      <div className="group-col">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder={PLACEHOLDER.AGE}
          autoComplete="age"
        />
        <p className="error">{errors.find((err) => 'age' in err)?.age}</p>
      </div>

      <div className="group-col">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={PLACEHOLDER.EMAIL}
          autoComplete="email"
        />
        <p className="error">{errors.find((err) => 'email' in err)?.email}</p>
      </div>

      <fieldset>
        <legend className="text-white">Password</legend>
        <div className="group-col">
          <label htmlFor="password">Enter password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={PLACEHOLDER.PASSWORD}
            autoComplete="password"
          />
          <p className="error">
            {errors.find((err) => 'password' in err)?.password}
          </p>
        </div>

        <div className="group-col">
          <label htmlFor="secondPassword">Confirm password:</label>
          <input
            type="password"
            name="secondPassword"
            placeholder={PLACEHOLDER.REPEAT_PASSWORD}
            id="secondPassword"
            autoComplete="secondPassword"
          />
          <p className="error">
            {errors.find((err) => 'secondPassword' in err)?.secondPassword}
          </p>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-white">Gender</legend>
        <div className="flex gap-5">
          <div className="flex gap-3.5 accent-amber-600">
            <label htmlFor="male">Male</label>
            <input
              className="sm-w-input"
              type="radio"
              id="male"
              value="male"
              name="male"
            />
          </div>
          <div className="flex gap-3.5 accent-amber-600">
            <label htmlFor="female">Female</label>
            <input
              className="sm-w-input"
              type="radio"
              name="female"
              id="female"
              value="female"
            />
          </div>
        </div>
        <p className="error">{errors.find((err) => 'gender' in err)?.gender}</p>
      </fieldset>

      <div className="flex-col">
        <div className="flex justify-between">
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
          <input
            className="sm-w-input accent-amber-600"
            type="checkbox"
            id="terms"
            name="terms"
          />
        </div>
        <p className="error">{errors.find((err) => 'terms' in err)?.terms}</p>
      </div>

      <div className="group-col">
        <label htmlFor="image">Image:</label>
        <input
          className="md-w-input"
          type="file"
          id="image"
          name="image"
          accept={VALID_EXTENSIONS.join(',')}
        />
        <p className="error">{errors.find((err) => 'image' in err)?.image}</p>
      </div>

      <div className="group-col">
        <label htmlFor="country">Country:</label>
        <input list="country-list" id="country" name="country" />
        <datalist id="country-list">
          {countries.map((country, idx) => (
            <option key={idx} value={country} />
          ))}
        </datalist>
        <p className="error">
          {errors.find((err) => 'country' in err)?.country}
        </p>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
