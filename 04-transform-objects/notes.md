# There are 4 properties to transform an object

* Position.
* Scale.
* Rotation.
* Quaternion (it is just like rotation).

### All classes that are inherit from Object3D posses the above properties like PerspecticeCamera or Mesh.
### All these properties will be compiled in matrices.

## Matrices:
* Behind the scene in Three.js we have matrices that get updeted with complex code, and at the end 
those matrices are send to GPU and the object redered to the screen.

### Postition is not just an object, position inherit from Vector3 which has many useful methods.

## Vector 3:
* Vector3 class represents a 3D vector.
* A 3D vector is an ordered triplet of numbers (labeled x, y and z), which can be used to represent a number
of things such as:
    * A point in 3D space.
    * A direction and length in 3D space. In three.js the length will always be the Euclidean distance (straight-line distance) from (0, 0, 0) to (x, y, z) and the direction is also measured from (0, 0, 0) towards (x, y, z).
    * Any arbitrary ordered triplet of numbers.

* mesh.position.length() can be used to calculate the length of a vector which is the distance between the
center of the scene and our object's position.

* To get the distance from the camera we can use mesh.position.distanceTo(camera.position)
