import { ErrorMessage, Field } from 'formik';
import {
  Container,
  ContainerSex,
  ContainerSexVariant,
  Icon,
  LabelField,
  Sex,
  TitleInput,
  TitleModal,
} from './ModalAddNotice.styled';
import { UploadImage } from './UploadImage/UploadImage';

export const ModalAddNoticeSecondStep = ({
  values,
  errors,
  setFieldValue,
}) => {
 
   
    
    return (
       
<>
            <TitleModal>Add pet</TitleModal>
            <ContainerSex>
              <TitleInput>
                The sex<span>*</span>:
              </TitleInput>
              <ContainerSexVariant>
                <label className={values.theSex === 'male' ? 'active' : ''}>
                  <Field type="radio" name="theSex" value="male" />
                  <Icon>icon</Icon>
                  <Sex>Male</Sex>
                </label>
                <label className={values.theSex === 'female' ? 'active' : ''}>
                  <Field type="radio" name="theSex" value="female" />
                  <Icon>icon</Icon>
                  <Sex>Female</Sex>
                </label>
              </ContainerSexVariant>
              {/* <div>{errors.sex}</div> */}
            </ContainerSex>
            <Container>
              <div>
                <LabelField>
                  <TitleInput>
                    Location<span>*</span>:
                  </TitleInput>
                  <Field
                    name="location"
                    type="text"
                    placeholder="City, Region"
                  />
                </LabelField>
                <ErrorMessage name="location" component="span"/>
              </div>
              {values.category === 'sell' && (
                <div>
                  <LabelField>
                    <TitleInput>
                      Price<span>*</span>:
                    </TitleInput>
                    <Field
                      name="price"
                      type="text"
                      // value={values.price}
                      placeholder="Type price"
                      // onChange={handleChange}
                    />
                  </LabelField>
                  <div>{errors.price}</div>
                </div>
              )} 
              {/* Load file */}

              <div>
                <LabelField>
                  <TitleInput>Load the pet’s image:</TitleInput>
                  <input
                    type="file"
                    name="petAvatar"
                    onChange={event => {
                      setFieldValue('petAvatar', event.currentTarget.files[0]);
                    }}
                  />
                  <div>
                    {values.petAvatar && <UploadImage image={values.petAvatar} />}
                  </div>
                </LabelField>
                <div>{errors.petAvatar}</div>
              </div>

              {/* Comment */}
              <div>
                <LabelField>
                  <TitleInput>Comments</TitleInput>
                  <Field as="textarea"
                    type="text"
                    name="comments"
                    placeholder="Type comment"
                  />
                </LabelField>
                <ErrorMessage name="comments" component="span"/>
              </div>
            </Container>
     </>
        
  );
};
